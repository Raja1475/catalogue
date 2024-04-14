pipeline {
    agent { node { label 'agent1'} }

    stages {
        stage('install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage ('unit testing') {
            steps {
                echo "unittesting done..."
            }
        }
    }
}