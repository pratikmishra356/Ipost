# Generated by Django 2.2.5 on 2019-09-23 10:32

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20190923_1031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2019, 9, 23, 10, 32, 20, 64449, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='post',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2019, 9, 23, 10, 32, 20, 63882, tzinfo=utc)),
        ),
    ]
