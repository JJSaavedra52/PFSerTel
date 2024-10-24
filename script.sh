#!/bin/bash

# Install MySQL
echo "Installing MySQL"

debconf-set-selections <<< 'mysql-server mysql-server/root_password password root'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password root'

sudo apt update
sudo apt install mysql-server -y
sudo systemctl start mysql.service

#Create and fill Database
echo "Creating and filling database"
sudo mysql -h localhost -u root -proot < /home/vagrant/init.sql

#Adding permissions to remote access
echo "Adding permissions to remote access"
sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mysql/mysql.conf.d/mysqld.cnf
sudo systemctl restart mysql.service

# Install Python Flask and Flask-MySQLdb
echo "Installing Python and dependencies"
sudo apt install python3-dev default-libmysqlclient-dev build-essential pkg-config mysql-client python3-pip -y
pip3 install Flask==2.3.3
pip3 install flask-cors
pip3 install Flask-MySQLdb
pip install Flask-SQLAlchemy

# Install Apache2 to deploy
echo "Installing Apache"
sudo apt install apache2 libapache2-mod-wsgi-py3 -y

#Run application
# cd /home/vagrant/webapp
# export FLASK_APP=run.py
# /usr/local/bin/flask run --host=0.0.0.0
