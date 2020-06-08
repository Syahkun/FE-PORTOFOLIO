

sudo docker build -f "Dockerfile" -t syahkun/reak-tutorial:$TRAVIS_BUILD_NUMBER .
sudo docker push syahkun/reak-tutorial:$TRAVIS_BUILD_NUMBER

echo $GCLOUD_SERVICE_KEY_PRD | base64 --decode > ${HOME}/gcloud-service-key.json
gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json

gcloud container clusters get-credentials $CLUSTER_NAME_PRD --region $CLOUDSDK_COMPUTE_REGION --project $PROJECT_NAME_PRD

kubectl config view
kubectl config current-context

 ## deploy api server
kubectl -n alta13 set image deployment/reak reak=syahkun/reak-tutorial:$TRAVIS_BUILD_NUMBER
