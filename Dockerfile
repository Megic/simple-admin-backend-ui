FROM golang:1.19.1-alpine as builder
LABEL maintainer="megic@wiredmed.com"
ENV GO111MODULE=on \
    GOPROXY=https://goproxy.cn,direct

RUN apk add gcc musl-dev
WORKDIR /app
COPY ./docker .

RUN GOOS=linux GOARCH=amd64 go build -o main main.go
RUN mkdir publish && cp main publish

FROM alpine
WORKDIR /app
COPY --from=builder /app/publish .
COPY ./dist /static/
# # 设置时区
# RUN apk --update add tzdata \
#     && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
#     && echo "Asia/Shanghai" > /etc/timezone \
#     && apk del tzdata
# replace this with youresolver 127.0.0.11;r application's default port
EXPOSE 80
CMD  ["./main"]