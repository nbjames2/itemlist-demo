FROM node:12.18-alpine as build
ENV REACT_APP_BASE_SERVER=http://localhost:4000
ENV REACT_APP_FIREBASE_APIKEY=
ENV REACT_APP_FIREBASE_AUTHDOMAIN=
ENV REACT_APP_FIREBASE_DATABASEURL=
ENV REACT_APP_FIREBASE_PROJECTID=
ENV REACT_APP_FIREBASE_STORAGEBUCKET=
ENV REACT_APP_FIREBASE_MESSAGINGSENDERID=
ENV REACT_APP_FIREBASE_APPID=
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . .
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
