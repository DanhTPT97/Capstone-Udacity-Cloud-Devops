#!/usr/bin/env bash

# This tags and uploads an image to Docker Hub

# Step 1:
# This is your Docker ID/path
# dockerpath=<>
dockerpath=danhtran210/get-list-api
podname=capstone-get-list-api
# Step 2
# Run the Docker Hub container with kubernetes
iscreated=$(kubectl get pod $podname 2> /dev/null; echo $?)
if [ "$iscreated" == "1" ] 
then
    kubectl run $podname \
    --image=$dockerpath \
    --port=3000 --labels app=get-list-api
fi

isready=false
while [ $isready != true ] 
do
    isready=$(kubectl get pod $podname \
                --output="jsonpath={.status.containerStatuses[*].ready}" \
                | cut -d' ' -f2)
    sleep 2
done

# Step 3:
# List kubernetes pods
kubectl get pods

# Step 4:
# Forward the container port to a host
kubectl port-forward $podname 8080:3000
