###############################################################################
# "serializer.py"
#
# This handles the serialization of data being transferred.
#
# Since I have already made a prototype with Django before, I just used my
# old prototype as a reference for this one.
# 
# @author   Allan DeBoe
# @date     January 15th, 2023
#
###############################################################################

from rest_framework import serializers
from . models import *

###############################################################################

# There is a serializer class for every model recognized and used by the
# back-end (or, more accurately, the database)

class UserSerializer(serializers.ModelSerializer):

    # represents the data to send over
    class Meta:
        model = User
        fields = ['username','profile_description']

    # ensures that the data is sent in correctly (i.e. in a way that
    # the back-end can understand)
    def validate(self, data):

        # generally, there should be stuff to check for any
        # potential injection attacks, but, since this is a 
        # prototype, there is no need for that as it is not
        # meant to be used except for testing out "new" software
        # technology.
        return data