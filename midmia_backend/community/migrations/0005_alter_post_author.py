# Generated by Django 4.2.1 on 2023-06-18 00:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0004_alter_post_author_delete_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]