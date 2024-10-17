# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

    config.vm.define :servidorWeb do |webServer1|
      servidorWeb.vm.box = "bento/ubuntu-22.04"
      servidorWeb.vm.network :private_network, ip: "192.168.50.10"
      servidorWeb.vm.provision "file", source: "webapp", destination: "/home/vagrant/webapp"
      servidorWeb.vm.provision "file", source: "init.sql", destination: "/home/vagrant/init.sql"
      servidorWeb.vm.provision "shell", path: "script.sh"
      servidorWeb.vm.hostname = "servidorWeb"
    end
  
    config.vm.define :servidorWeb do |webServer2|
      servidorWeb.vm.box = "bento/ubuntu-22.04"
      servidorWeb.vm.network :private_network, ip: "192.168.50.20"
      servidorWeb.vm.provision "file", source: "webapp", destination: "/home/vagrant/webapp"
      servidorWeb.vm.provision "file", source: "init.sql", destination: "/home/vagrant/init.sql"
      servidorWeb.vm.provision "shell", path: "script.sh"
      servidorWeb.vm.hostname = "servidorWeb"
    end
  
#     config.vm.define :servidorWeb do |loadBalancer|
#       servidorWeb.vm.box = "bento/ubuntu-22.04"
#       servidorWeb.vm.network :private_network, ip: "192.168.50.30"
#       servidorWeb.vm.provision "file", source: "webapp", destination: "/home/vagrant/webapp"
#       servidorWeb.vm.provision "file", source: "init.sql", destination: "/home/vagrant/init.sql"
#       servidorWeb.vm.provision "shell", path: "script.sh"
#       servidorWeb.vm.hostname = "servidorWeb"
#     end
#   end  