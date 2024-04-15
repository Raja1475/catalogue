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
                echo "unittesting done...."
            }
        }

        // stage ('sonar scan') {
        //     steps {
        //         sh 'sonar-scanner'
        //     }
        // }

        stage('packaging') {
            steps {
                sh 'ls -l'
                zip zipFile: '', dir: '.', exclude: 'Jenkinsfile,sonar-project.properties,.git'
            }
        }

        stage('artifact-uploder') {
            steps {
                 nexusArtifactUploader(
                    nexusVersion: 'nexus3',
                    protocol: 'http',
                    nexusUrl: '54.235.60.60:8081/repository/catalogue/',
                    groupId: 'com.roboshop',
                    version: '1.0.0.0'
                    repository: 'catalogue',
                    credentialsId: 'nexus-auth',
                    artifacts: [
                        [artifactId: catalogue,
                        classifier: '',
                        file: 'catalogue.zip',
                        type: 'zip']
                    ]
                )
            }
        }
}

post {
    always {
        echo "cleanning up workspace..."
        deleteDir()
    }
}

}