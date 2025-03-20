FROM python:3.12-bookworm

WORKDIR /usr/musaca

COPY ./deployment/requirements.txt .
RUN pip install -r requirements.txt
