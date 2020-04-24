export const clearAccumulator = {
  title: 'Limpiar Acumulador',
  description: 'Pone en 0 el acmulador',
  program: `STR 06
SUB 06
WRT
STP
123
123
123`
};

export const add2numbers = {
  title: 'Sumar dos numeros',
  description: 'Sumar los numeros en las posiciones 08 y 09 y mostrar el resultado',
  program: `STR 10
SUB 10
ADD 10
ADD 11
WRT
STP
WRT
STP
100
123
124
`
};

export const sub2numbers = {
  title: 'Restar dos numeros',
  description: 'Restar los numeros en las posiciones 08 y 09 y mostrar el resultado',
  program: `STR 10
SUB 10
ADD 10
SUB 11
WRT
STP
0
0
0
0
100
123`
};
export const jump = {
  title: 'Salto incondicional',
  description: 'Realiza un salto independientemente del valor del acumulador',
  program: `ADD 10
JUI 04
STP
WRT
ADD 2
WRT
STP
STP
00
00
30
`
};

export const infiniteLoop = {
  title: 'Loop infinito',
  description: 'Realiza un salto independientemente pero entra en un bucle infinito',
  program: `ADD 6
WRT
SUB 7
JUI 0
STP
00
10
7`};

export const sums = {
  title: 'Sumas sucesivas',
  description: 'Suma la posicion 11 hsata que el valor llegue al cotenido de la posicion 10',
  program: `ADD 11
STR 10
SUB 12
JUN 00
WRT
STP
00
00
00
00
10
200
250`
};

export const printer = {
  title: 'Imprmir posicion de memoria',
  description: 'Imprime la posicion de memoria 20 tantas veces como diga la posicion de memoria 21 usando 22 como contador',
  program: `STR 23
SUB 23
STR 22
STR 23
SUB 23
ADD 10
WRT
STR 23
SUB 23
ADD 22
ADD 24 
SUB 21
JUN 03
STP
00
00
00
00
00
00
00
10
00
00
01`
};
