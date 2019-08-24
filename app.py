import requests
import flask
import json
import subprocess
import os
from flask_cors import CORS
import threading
import smtplib
app = flask.Flask(__name__)
voteData=''
CORS(app)

@app.route('/api/v1/routes/<string:source>/<string:dest>',methods=['GET'])
def getroute(source,dest):
    ''' gets route '''
    sourcedest=source+"+"+dest
    os.system(r".\\scrapers\\node_modules\\.bin\\wdio .\\scrapers\\wdio.conf.js --suite gmaps "+sourcedest)
    keys=["WALK"]
    step=[]
    semistep=[]
    with open("timings.txt","r") as file:
        coords=[file.readline(),file.readline()]
        #print(coords)
        #file.seek(0,from="current")
        data=file.readlines()
        step.append(coords)
        time=[]
        for line in data:
            if "Walk" in line:
                step.append(semistep)
                semistep=[]
                semistep.append(line)
            elif line[0]==",":
                step.append(semistep)
                semistep=[]
                semistep.append(line)
            else:
                semistep.append(line)
                if "stop" in line:
                    l=line.split(' ')
                    time.append(int(l[0]))
                if "cost" in line:
                    cost=line.split(":")[1]
                if "dist" in line:
                    dist=line.split(":")[1]
    step.append(time)
    step.append(cost)
    step.append(dist)
    js=json.dumps(step)
    resp = flask.Response(js, status=200, mimetype='application/json')
    return resp
@app.route('/api/v1/fuel',methods=['GET'])
def fuelcalc():
    mileage=10
    with open("timings.txt","r") as file:
        data=file.readlines()
        for line in data:
            if "dist" in line:
                l=line.split(":")[1]
                dist=float(l.split(' ')[0])
                fuelcons=dist/10
                return flask.Response(json.dumps(fuelcons),status=200, mimetype='application/json')
@app.route('/api/v1/cost',methods=['GET'])
def cost():
    base=40
    inc=10
    with open("timings.txt","r") as file:
        data=file.readlines()
        for line in data:
            if "dist" in line:
                l=line.split(":")[1]
                dist=float(l.split(' ')[0])
                if(dist<2):
                    cost=base
                else:
                    incost=(dist-int(dist))*inc
                    cost=base+incost
                return flask.Response(json.dumps(cost),status=200, mimetype='application/json')
#1
# @app.route('/api/v1/create',methods= ['POST'])
# def createContract():
#     ''' creates vote contract '''
#     global voteData
#     cid=flask.request.json['candidateid']
#     voteData=cid
#     cid=cid.split()
#     cid=''.join(cid)
#     os.system(r".\\azure-vote\\node_modules\\.bin\\wdio .\\azure-vote\\wdio.conf.js --suite contract "+cid)
#     return flask.Response(status=200)

# @app.route('/api/v1/verify',methods=['GET'])
# def takeaction():
#     ''' does verification '''
#     #profile values send as cli arguments
#     trace=os.popen("python hashing.py").read()
#     ver=os.system(r".\\azure-vote\\node_modules\\.bin\\wdio .\\azure-vote\\wdio.conf.js --suite verify "+trace)
#     if ver!=0:
#         return flask.Response(status=401)
#     else:
#         s = smtplib.SMTP('smtp.gmail.com', 587) 
#         s.starttls() 
#         s.login("anandlagwankerm", "Animesh@Ishaan@Tejvi1234") 
#         message = "Voted for "+voteData
#         s.sendmail("anandlagwankerm@gmail.com", "anandlagwankerm@gmail.com", message) 
#         s.quit() 
#         return flask.Response(status=200)

# @app.route('/api/v1/action',methods=['GET'])
# def verify():
#     ''' verfies whether the vote is valid '''
#     os.system(r".\\azure-vote\\node_modules\\.bin\\wdio .\\azure-vote\\wdio.conf.js --suite action "+ voteData)
#     return flask.Response(status=200)

if __name__ == '__main__':
	app.run(host='0.0.0.0',port=5000)
