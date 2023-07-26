//Se declaran las constantes que representan los tipos de acciones que ocurren dentro de la aplicación.
//Es una convención en Redux utilizar constantes para definir los tipos de acción
//Este archivo simplemente contiene las constantes que representan los tipos de acciones que pueden ocurrir en la aplicación de forma global.
//Estos tipos son utilizados por los action-creators (definidos en el archivo actions.js) para crear las acciones que luego son enviadas al reducer.
//Cada constante representa una acción específica que se realizará en la aplicación, como obtener recetas, filtrar recetas por tipo de dieta, ordenar recetas, etc.
//El propósito de las actions-type es evitar errores tipográficos y garantizar  que los nombres de las actions se mantengan consistentes, 
//hace que el código sea más legible, más fácil de mantener y así evitar errores.
export const GET_RECIPES = 'GET_RECIPES'
export const FILTER_BY_TYPEDIET = 'FILTER_BY_TYPEDIET'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_PUNTUATION = 'ORDER_BY_PUNTUATION'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_BY_ID = 'GET_BY_ID'
export const GET_TYPE_DIETS = 'GET_TYPE_DIETS'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const DELETE_RECIPE = 'DELETE_RECIPE'
export const FILTER_CREATED = 'FILTER_CREATED'
export const NEW_API = 'NEW_API'
