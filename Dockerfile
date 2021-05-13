# This image is not yet distroless because distroless images expect thatthe entrypoint will be a .js file and ours is vue-cli-service
# We use lopsided/archlinux for comptability

FROM js951204/starport:second

USER root

RUN wget https://github.com/protocolbuffers/protobuf/releases/download/v3.17.0/protoc-3.17.0-linux-x86_64.zip
RUN apt install unzip
RUN unzip protoc-3.17.0-linux-x86_64.zip -d $HOME/local
RUN mv ${HOME}/local/bin/protoc /usr/bin/protoc
COPY . /apps/gravity

WORKDIR /apps/gravity


CMD ["serve"]
