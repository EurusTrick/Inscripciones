# Generated by Django 5.1 on 2024-08-14 06:07

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inscripciones', '0004_inscripcion'),
    ]

    operations = [
        migrations.AddField(
            model_name='padretutor',
            name='alumno',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='padres', to='inscripciones.alumno'),
        ),
        migrations.AlterField(
            model_name='inscripcion',
            name='alumno',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='inscripciones', to='inscripciones.alumno'),
        ),
    ]
