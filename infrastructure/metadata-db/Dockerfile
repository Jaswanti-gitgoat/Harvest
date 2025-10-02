FROM golang:alpine
LABEL MAINTAINER="Madhu Akula" INFO="Kubernetes Goat"

WORKDIR /

COPY metadata /metadata
COPY go.mod /go.mod
COPY main.go /main.go


RUN apk add --no-cache curl ca-certificates
RUN go build -o /

EXPOSE 80

CMD ["/metadata-db"]

# ================ ARNICA SECURITY ANNOTATION BLOCK START ================
LABEL org.opencontainers.image.source="https://github.com/Jaswanti-gitgoat/Harvest"
LABEL org.opencontainers.image.path="infrastructure/metadata-db/Dockerfile"
# These automated labels, added by the security team, enhance traceability and security.
# For more details, see: https://docs.arnica.io/arnica-documentation/developers/adding-oci-tags-to-docker-images.
# To exclude this file, please replace this change with: #arnica-ignore followed by the dismissal reason.
# ================ ARNICA SECURITY ANNOTATION BLOCK END ================
