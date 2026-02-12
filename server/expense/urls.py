from django.urls import path
from .views import ExpenseView

urlpatterns = [
    path('expenses/', ExpenseView.as_view()),
    path('expenses/<uuid:pk>/', ExpenseView.as_view()),
]
