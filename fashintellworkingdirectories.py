# -*- coding: utf-8 -*-
"""FashInTellWorkingDirectories.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1vZE0XHd3-7gEyPir2sPblF6dMDWuWvg5
"""

import pandas as pd
import tensorflow as tf
import numpy as np
from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Input, Dense, Dropout
from keras import backend as K
from sklearn import preprocessing
import matplotlib.pyplot as plt

#processing data
df = pd.read_csv("clothingAttributes.csv")
df = df.drop(columns = ['Unnamed: 0'])
#neural network df
dfnn = pd.DataFrame(columns = df.columns)
dfnn['userIn'] = []
#suggestion df
dfsug = df.copy()
dfsug['likelihood'] = df.apply(lambda _: 0 , axis=1)

#create model
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(14,)),
    keras.layers.Dense(32, activation=tf.nn.relu),
	  keras.layers.Dense(64, activation=tf.nn.relu),
    keras.layers.Dense(1, activation=tf.nn.sigmoid),
])

model.compile(optimizer='sgd',
              loss='binary_crossentropy',
              metrics=['accuracy'])

K.set_value(model.optimizer.learning_rate, 0.0025)

def update_nn():
  id = "00000089-04" #replaced by JSON
  decision = 1 #replaced by JSON
  temp = list(df.loc[df['ID'] == id].iloc[0])
  dfnn.loc[0] = temp + [int(decision)]
  dfnn.iloc[-1]["userIn"] = decision
  training = dfnn.tail(1)
  training = training.drop(columns = ['ID']).astype('float32')
  X = training.iloc[:, 0:14]
  Y = training.iloc[:, 14]
  model.fit(X, Y, epochs=1)
  return id

update_nn()
dfsug = dfsug[dfsug.ID != "00000089-04"]
testing = dfsug.copy().drop(columns = ['ID', 'likelihood']).astype('float32')
pred = testing.iloc[:, 0:14]
dfsug['likelihood'] = model.predict(pred)
(dfsug.sort_values(by=['likelihood'], ascending=False)['ID'].iloc[0])

