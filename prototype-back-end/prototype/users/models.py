###############################################################################
# "models.py"
#
# This handles the models (data) that the prototype would deal with. Since
# this is a simple prototype, there is only one model, and that is "User"
#
# Since I have already made a prototype with Django before, I just used my
# old prototype as a reference for this one.
# 
# @author   Allan DeBoe
# @date     January 15th, 2023
#
###############################################################################

# STANDARD PYTHON LIBRARIES
from datetime import date

# DJANGO LIBRARIES
from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError

###############################################################################

class User(models.Model):
    username = models.CharField(max_length=32, blank=False, default='username')
    account_creation_date = models.DateField(blank=False, default=timezone.now)
    profile_description = models.TextField()