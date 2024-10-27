sudo apt update
sudo apt install apache2 -y
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
sudo a2enmod lbmethod_bytraffic
sudo a2enmod lbmethod_bybusyness
sudo a2enmod lbmethod_heartbeat

cp /home/vagrant/load-balancer-conf/load-balancer.conf /etc/apache2/conf-available
cp /home/vagrant/load-balancer-conf/lb-manager.conf /etc/apache2/conf-available

sudo htpasswd -c -b /etc/apache2/htpasswd root root

cd /etc/apache2/conf-available
sudo a2enconf load-balancer
sudo a2enconf lb-manager

sudo systemctl restart apache2
sudo systemctl reload apache2