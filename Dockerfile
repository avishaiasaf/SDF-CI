FROM alpine:3.14
RUN apk add --no-cache bash
RUN apk add --update npm
RUN apk add git
RUN apk add openjdk11
RUN npm install -g @oracle/suitecloud-cli

CMD ["/bin/bash"]