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

                stage('Parallel Stages') {
            parallel {
                stage('Stage 1') {
                    when {
                        expression { return env.BRANCH_NAME == 'main' }
                    }
                    steps {
                        script {
                            echo 'Running Stage 1 on main branch...'
                            // Use credentials if needed
                            withCredentials([usernamePassword(credentialsId: 'admin', passwordVariable: 'admin', usernameVariable: 'admin')]) {
                                sh '''
                                    echo "Username: $USER"
                                    echo "Password: $PASS"
                                    # Add your command here
                                '''
                            }
                        }
                    }
                }
                stage('Stage 2') {
                    when {
                        expression { return env.BRANCH_NAME == 'develop' }
                    }
                    steps {
                        echo 'Running Stage 2 on develop branch...'
                        // Add commands for this stage
                    }
                }
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
