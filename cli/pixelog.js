#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .name('pixelog')
  .description('CLI for Pixelog application')
  .version('0.0.1');

program.command('ingest <file>')
  .description('Ingest a file into Pixelog')
  .action(async (file) => {
    const fs = require('fs');
    const FormData = require('form-data');
    const axios = require('axios');

    const filePath = file;
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));

    try {
      const response = await axios.post('http://localhost:3000/assets', form, {
        headers: form.getHeaders(),
      });
      console.log('File ingested successfully:', response.data);
    } catch (error) {
      console.error('Error ingesting file:', error.message);
    }
  });

program.command('search <query>')
  .description('Search for knowledge assets in Pixelog')
  .action(async (query) => {
    const axios = require('axios');

    try {
      const response = await axios.get(`http://localhost:3000/search?q=${query}`);
      console.log('Search results:', response.data);
    } catch (error) {
      console.error('Error searching:', error.message);
    }
  });

program.parse(process.argv);
