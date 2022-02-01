import pandas as pd
import matplotlib as mp

data = pd.read_csv("/Users/Maria Cristoforo/DALI/DataVizCourse/myapp/src/data/global_food_prices.csv")
# print(data)

#check for missing data / mixed data types
print(data.isna().sum())

#check for duplicates - none
print(data.duplicated())
print(data.columns.duplicated())
