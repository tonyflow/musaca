FROM python:3.12-bookworm

WORKDIR /usr/musaca-backend
ENV PYTHONPATH=/usr/musaca-backend

COPY ./deployment/requirements.txt .
RUN pip install -r requirements.txt
