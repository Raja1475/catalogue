pipeline {
    agent { node { label 'Agent'} }

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