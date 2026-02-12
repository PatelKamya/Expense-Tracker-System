from django.shortcuts import render
from .serializers import ExpenseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Expense
from rest_framework import status

class ExpenseView(APIView):
    def get(self, req):
        expenses = Expense.objects.all()
        serializer = ExpenseSerializer(expenses, many=True)
        return Response(serializer.data)
    
    def post(self, req):
        serializer = ExpenseSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, req, pk):
        try :
            expense = Expense.objects.get(pk=pk)
        except Expense.DoesNotExist:
            return Response({"error": "not found"}, status=404)
        
        expense.delete()
        return Response({"message": "deleted"}, status=204)




