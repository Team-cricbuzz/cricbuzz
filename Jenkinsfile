pipeline {
    agent any
    triggers {
        // Trigger the job when there's a commit push to the GitHub repository
        pollSCM('* * * * *')  // Polling every minute, but use GitHub webhook for real-time trigger
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                git branch: 'parthi', url: 'https://github.com/Team-cricbuzz/cricbuzz.git'
            }
        }
        stage('Build') {
            steps {
                // Example build step
                echo 'Building the project...'
            }
        }
        stage('Test') {
            steps {
                // Example test step
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                // Example deploy step
                echo 'Deploying to the server...'
            }
        }
    }
}
