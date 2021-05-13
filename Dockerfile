# This image is not yet distroless because distroless images expect thatthe entrypoint will be a .js file and ours is vue-cli-service
# We use lopsided/archlinux for comptability

FROM js951204/starport

COPY ./ /usr/app/
WORKDIR /usr/app/

CMD ["serve"]
