#!/bin/bash

# Install MySQL
echo "Installing MySQL"

debconf-set-selections <<< 'mysql-server mysql-server/root_password password root'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password root'

sudo apt update
sudo apt install mysql-server -y
sudo systemctl start mysql.service

# Create and fill Database
echo "Creating and filling database"
sudo mysql -h localhost -u root -proot < /home/vagrant/init.sql

# Adding permissions to remote access
echo "Adding permissions to remote access"
sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mysql/mysql.conf.d/mysqld.cnf
sudo systemctl restart mysql.service

# Grant remote access to root user
echo "Granting remote access to root user"
sudo mysql -u root -proot -e "CREATE USER 'root'@'%' IDENTIFIED BY 'root'; GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; FLUSH PRIVILEGES;"