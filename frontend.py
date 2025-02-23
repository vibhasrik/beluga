import streamlit as st
import pandas as pd

def main():
    st.title("Survey Questions Upload")

    uploaded_file = st.file_uploader("Upload a CSV file with the survey questions", type="csv")

    if uploaded_file is not None:
        # Read the CSV file
        df = pd.read_csv(uploaded_file)

        # Display the dataframe
        st.write("Dataframe:")
        st.dataframe(df)

        # Display some statistics
        st.write("Summary Statistics:")
        st.write(df.describe())

if __name__ == "__main__":
    main()