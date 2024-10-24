# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

    config.vm.define :webServer1 do |webServer1|
      webServer1.vm.box = "bento/ubuntu-22.04"
      webServer1.vm.network :private_network, ip: "192.168.50.10"
      webServer1.vm.provision "file", source: "webapp", destination: "/home/vagrant/webapp"
      webServer1.vm.provision "file", source: "init.sql", destination: "/home/vagrant/init.sql"
      webServer1.vm.provision "shell", path: "script.sh"
      webServer1.vm.hostname = "webServer1"
    end
  
    config.vm.define :webServer2 do |webServer2|
      webServer2.vm.box = "bento/ubuntu-22.04"
      webServer2.vm.network :private_network, ip: "192.168.50.20"
      webServer2.vm.provision "file", source: "webapp", destination: "/home/vagrant/webapp"
      webServer2.vm.provision "file", source: "init.sql", destination: "/home/vagrant/init.sql"
      webServer2.vm.provision "shell", path: "script.sh"
      webServer2.vm.hostname = "webServer2"
    end
  end  
  
#     config.vm.define :loadBalancer do |loadBalancer|
#       loadBalancer.vm.box = "bento/ubuntu-22.04"
#       loadBalancer.vm.network :private_network, ip: "192.168.50.30"
#       loadBalancer.vm.hostname = "loadBalancer"
#     end