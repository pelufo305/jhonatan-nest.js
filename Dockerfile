# Set nginx base image
FROM node:18
LABEL maintainer="Jhonatan Stiven Gonzalez"
WORKDIR  /app
COPY  ./dist ./dist
COPY package.json .
COPY package-lock.json .
ENV CLEAN_NEST_MONGO_CONNECTION_STRING = "mongodb+srv://jhonatansgonzalez93:vwswmcwHY9pJtVB7@cluster0.fnxha5g.mongodb.net/prueba?retryWrites=true&w=majority"
RUN  npm ci --only=production --ignore-scripts
EXPOSE 3000
CMD ["node", "dist/main"]
