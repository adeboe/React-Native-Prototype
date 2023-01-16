###############################################################################
# "views.py"
#
# This handles how the data can be interacted with (via a REST framework).
#
# Since I have already made a prototype with Django before, I just used my
# old prototype as a reference for this one.
# 
# @author   Allan DeBoe
# @date     January 15th, 2023
#
###############################################################################

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from . models import *
from . serializer import *

###############################################################################

class UserView(APIView):

    serializer_class = UserSerializer

    # Handles "GET" requests. In this case, it handles displaying all
    # of the user data that is stored (not great in practice, especially
    # if it contains sensitive information, but that is not an issue here)
    def get(self, request):
        
        # This extracts all of Users
        data = [{
            'username': obj.username,
            'account_creation_date': obj.account_creation_date,
            'profile_description': obj.profile_description,
        } for obj in React.objects.all()]

        # returns all of the users
        return Response(data)

    # Handles POST requests. In this case, it handles adding a new 
    # user to the database.
    def post(self, request):

        serializer = UserSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)