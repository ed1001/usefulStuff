
# find process that is listening on a particular port
sudo lsof -i :8081

# get local ip
ip route get 1 | awk '{print $NF;exit}'

