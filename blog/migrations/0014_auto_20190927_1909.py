# Generated by Django 2.2.5 on 2019-09-27 19:09

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0013_auto_20190927_1806'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2019, 9, 27, 19, 9, 1, 142321, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, upload_to='blog/post_pics'),
        ),
    ]
