import json
import requests

URL_API = "http://159.65.12.44:8080/api/v3"
URL_AUTH = "http://159.65.12.44:8080/auth/v3"

def optimize(tup):
	total = 0
	for prize in tup:
		total += prize

	prize = total / len(tup)
	for i in range(len(tup)):
		tup[i] = tup - prize

	tup = tup.sort()

	

def get_person(person):
	""