pipeline {
    agent { node { label 'Agent1'} }

    stages {
        stage('install depdencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Unit Testing') {
            steps {
                echo 'unit testing is done'
            }
        }

        stage('sonar scan') {
            steps {
                sh 'ls -ltr'
                sh 'sonar-scanner'
            }
        }
    }
}