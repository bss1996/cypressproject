pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                Checkout scm
            }
        }
        stage('Test') {
            steps {
                sh 'sudo npm install'
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
