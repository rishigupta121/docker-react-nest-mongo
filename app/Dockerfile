FROM node:18-alpine3.14

#set working directory
WORKDIR /app

ENV PATH ./node_modules/.bin:$PATH

# add app
COPY ./ ./

RUN npm install
#RUN npm install react-scripts@4.0.3 -g
ENV CHOKIDAR_USEPOLLING=true
#start app
CMD ["npm" ,"start"]
