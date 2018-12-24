FROM centos:7
MAINTAINER Mygel Bergstresser version: 0.1

# Install Git
RUN yum install -y \
	git \
	wget \
	tar

WORKDIR /usr/local/bin

# Install Hugo
RUN wget https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_Linux-64bit.tar.gz

# Uncompress tarbar and remove installation file
RUN tar xvzf hugo_0.30.2_Linux-64bit.tar.gz \
	&& rm -rf hugo_0.30.2_Linux-64bit.tar.gz

# Make Hugo accessible
RUN ln -s /hugo /bin

# Change Directory
RUN mkdir /www
WORKDIR /www
COPY www .

CMD hugo server --port=80