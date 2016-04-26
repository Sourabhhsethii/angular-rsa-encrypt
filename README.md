Introduction
======================
If You browse on the internet for a good solution to RSA Javascript Encryption on front End,
there are lot of libraries that basically take the fantastic work done by Tom Wu @ http://www-cs-students.stanford.edu/~tjw/jsbn/ and then
modify that code.

its a library , written a  simple wrapper around this library that
basically uses the library practically untouched, but adds a wrapper to provide Exponent and Modules  generated with OpenSSL Public key  with the support of 
Angular 1.5

This library is the result of the efforts by Tom Wu and Wrapped by Sourahb Sethi to Provide direct angular Support without (Hazel free Encryption).

Will release production copy as soon as Possible.

 
Other Information
========================

This library simply takes keys in the following format, and translates it to those variables needed to perform the encryptions used in Tom Wu's library.

Here are some good resources to investigate further.
 - http://ats.oka.nu/titaniumcore/js/crypto/RSA.readme.txt
 - http://www-cs-students.stanford.edu/~tjw/jsbn/
 - http://www.itu.int/en/ITU-T/asn1/Pages/introduction.aspx

we can translate a private key format to the variables
required with the jsbn library from Tom Wu by using the following mappings.

```
modulus => n
public exponent => e
private exponent => d
prime1 => p
prime2 => q
exponent1 => dmp1
exponent2 => dmq1
coefficient => coeff
```


Happy Encrypting !!
