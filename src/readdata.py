import pandas as pd
import matplotlib as mp

col_list = ["adm0_name", "cm_name", "cur_name", "mp_year", "mp_price"]
subset_columns = ["adm0_name", "cm_name"]
chosen_rows = ["Afghanistan", "China", "Columbia", "Egypt", "Lebanon"]
data = pd.read_csv("/Users/Maria Cristoforo/DALI/DataVizCourse/myapp/src/data/global_food_prices.csv", usecols=col_list)
data = data.drop_duplicates(subset=subset_columns)

# row_names = data["adm0_name"].drop_duplicates()
# print(row_names)

#print(data)

data.to_csv('filtered-data.csv')


#check for missing data / mixed data types
# print(data.isna().sum())

# #check for duplicates - none
# print(data.duplicated())
# print(data.columns.duplicated())
