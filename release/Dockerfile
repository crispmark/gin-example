FROM node:8.9.4-alpine

RUN apk add --no-cache git

ADD ./public /gin-example/public

WORKDIR /gin-example/public

RUN npm install
RUN npm run build

FROM golang:1.9-alpine

WORKDIR /go/src/gin-example

RUN apk add --no-cache git make

RUN go get -u -d github.com/golang/dep/cmd/dep  \
    && go build -o /usr/local/bin/dep github.com/golang/dep/cmd/dep

ADD ./ /go/src/gin-example

RUN dep ensure

RUN go build

COPY --from=0 /gin-example/dist /go/src/gin-example/dist

RUN tar -czvf gin-example.tar.gz dist gin-example

FROM alpine:3.7

WORKDIR /gin-example

COPY --from=1 /go/src/gin-example/gin-example.tar.gz /gin-example/gin-example.tar.gz

CMD tar -xzvf gin-example.tar.gz \
    && ./gin-example