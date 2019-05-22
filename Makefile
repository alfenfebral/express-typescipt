create:
	docker create --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
start:
	docker start sonarqube
stop:
	docker stop sonarqube
remove:
	docker rm sonarqube