from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RobotSerializer

from .models import Robot

# Create your views here.

"""GET /api/robots"""
@api_view(['GET', "POST"])
def allRobots(request): 
    if request.method == 'GET':
        robots = Robot.objects.all()
        serializer = RobotSerializer(robots, many=True)
        return Response(serializer.data)
    elif request.method == 'POST': 
        serializer = RobotSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        

"""GET /api/robots/<str:pk>"""
@api_view(['GET', 'DELETE'])
def singleRobot(request, pk):
    robot = Robot.objects.get(id=pk)
    if request.method == 'GET':
        serializer = RobotSerializer(robot, many=False)
        return Response(serializer.data)
    else: 
        robot.delete()
        return Response('Robot Deleted')

