# Generated by Django 4.2.1 on 2023-06-08 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('champions', '0005_champion_en_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='champion',
            name='en_name',
        ),
        migrations.AddField(
            model_name='champion',
            name='champi_image_link',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
