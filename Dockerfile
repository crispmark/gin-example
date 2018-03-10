FROM golang:1.9-alpine

WORKDIR "/go"

RUN apk update \
    && apk add make git

RUN go get -u -d github.com/golang/dep/cmd/dep  \
    && go build -o /usr/local/bin/dep github.com/golang/dep/cmd/dep

WORKDIR "/go/src/gin-example"