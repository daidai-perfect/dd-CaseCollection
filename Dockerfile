FROM nginx
COPY nginx/nginx.conf /etc/nginx
COPY nginx/start.sh /bin/start.sh
ADD ./dist /data/www
ENV SERVICENAME="abit-capital"
ENTRYPOINT ["sh", "/bin/start.sh"]
