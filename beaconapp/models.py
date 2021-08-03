from django.db import models


class Beacon(models.Model):
    address = models.CharField(max_length=300)
    district = models.TextField(null=True)

    def __str__(self):
        return self.district
    